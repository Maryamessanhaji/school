import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="min-h-screen  flex items-center justify-center  ">
      <div className="bg-white border border-secondaryColor rounded-lg shadow-lg w-full max-w-3xl flex flex-col dark:bg-drkColor md:flex-row">
        {/* Left Section: Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src='https://i.pinimg.com/736x/81/43/ff/8143ff287dcb412e3645cb04317cf2f0.jpg'
            alt="Login Illustration"
            className="w-full h-full bg-cover rounded-r-lg"
          />
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-secondaryColor dark:text-white text-center mb-6">
            تسجيل الدخول
          </h2>
          <form>
            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-right text-secondaryColor  dark:text-white font-medium mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                placeholder="أدخل البريد الإلكتروني"
                className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              />
            </div>
            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-right text-secondaryColor  dark:text-white font-medium mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                placeholder="أدخل كلمة المرور"
                className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
              />
            </div>
            {/* Login Button */}

            <button
              type="submit"
              className="w-full  bg-secondaryColor text-black dark:text-white  py-2 px-4 rounded-lg shadow-lg  focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300">
              تسجيل الدخول
            </button>
          </form>

          {/* Additional Links */}
          <div className="text-right mt-4">
            <p className="text-sm text-gray-500  dark:text-white">
              ليس لديك حساب؟{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:text-purple-600 transition duration-300 underline">
                إنشاء حساب
              </Link>
            </p>
          </div>

          {/* Home Button */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-block bg-secondaryColor text-black dark:text-white py-2 px-6 rounded-lg shadow-md   transition duration-300">
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
