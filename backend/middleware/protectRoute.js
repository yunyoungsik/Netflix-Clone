import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ENV_VARS } from "../config/envVars.js";

export const protectRoute = async (req, res, next) => {
	try {
    // 쿠키에서 'jwt-netflix'라는 이름의 토큰을 가져옵니다.
		const token = req.cookies["jwt-netflix"];

		if (!token) {
			return res.status(401).json({ success: false, message: "Unauthorized - No Token Provided" });
		}

    // 가져온 토큰을 검증하고 디코딩합니다. 이 때, ENV_VARS.JWT_SECRET 키를 사용합니다.
		const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
		}

    // 디코딩된 토큰에서 사용자 ID를 추출하여, 데이터베이스에서 해당 사용자를 조회합니다.
    // 이 때, '-password'를 사용하여 사용자 객체에서 password 필드를 제외하고 가져옵니다.
		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

    // 조회된 사용자 정보를 req.user에 할당하여 이후 미들웨어나 라우트 핸들러에서 사용할 수 있도록 합니다.
		req.user = user;

    // 다음 미들웨어나 라우트 핸들러로 넘어갑니다.
		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};