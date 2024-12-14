import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-row-reverse ">
      <div className="bg-white border border-y-amber-300 mt-10 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden ">
        {/* Left Section: Form */}
        <div className="w-full md:w-2/3 p-8">
          {/* Already have an account? */}
          <div className="text-right mb-6">
            <span className="text-gray-600">لديك حساب بالفعل؟ </span>
            <Link
              to="/login"
              className="text-blue-500 hover:underline hover:text-blue-700 transition duration-300"
            >
              الدخول إلى حسابك
            </Link>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            إنشاء حساب
          </h2>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            {/* Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="lName"
                  className="block text-right text-gray-700 font-medium mb-2"
                >
                  الاسم الثالث
                </label>
                <input
                  type="text"
                  id="lName"
                  className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="أدخل اسمك الثالث"
                />
              </div>
              <div>
                <label
                  htmlFor="mName"
                  className="block text-right text-gray-700 font-medium mb-2"
                >
                  الاسم الثاني
                </label>
                <input
                  type="text"
                  id="mName"
                  className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="أدخل اسمك الثاني"
                />
              </div>
              <div>
                <label
                  htmlFor="fName"
                  className="block text-right text-gray-700 font-medium mb-2"
                >
                  الاسم الأول
                </label>
                <input
                  type="text"
                  id="fName"
                  className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="أدخل اسمك الأول"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-right text-gray-700 font-medium mb-2"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>

            {/* Phone Numbers */}
            <div>
              <label
                htmlFor="phone"
                className="block text-right text-gray-700 font-medium mb-2"
              >
                رقم الهاتف
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="أدخل رقم هاتفك"
              />
            </div>

            <div>
              <label
                htmlFor="fatherPhone"
                className="block text-right text-gray-700 font-medium mb-2"
              >
                رقم هاتف ولي الأمر
              </label>
              <input
                type="text"
                id="fatherPhone"
                className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="أدخل رقم ولي الأمر"
              />
            </div>

            {/* Year and Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="year"
                  className="block text-right text-gray-700 font-medium mb-2"
                >
                  السنة الدراسية
                </label>
                <select
                  id="year"
                  className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                >
                  <option value="1">الصف الأول الثانوي</option>
                  <option value="2">الصف الثاني الثانوي</option>
                  <option value="3">الصف الثالث الثانوي</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="Gender"
                  className="block text-right text-gray-700 font-medium mb-2"
                >
                  النوع
                </label>
                <select
                  id="Gender"
                  className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                >
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-right text-gray-700 font-medium mb-2"
              >
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="أدخل كلمة المرور"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-right text-gray-700 font-medium mb-2"
              >
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="أعد كتابة كلمة المرور"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#cfc85a] to-amber-400  hover:from-amber-500  hover:to-[#cfc85a] text-white py-2 px-4 rounded-lg shadow-lg  transition duration-300"
            >
              إنشاء حساب
            </button>
          </form>
        </div>

        {/* Right Section: Image */}
        <div className="hidden md:block md:w-1/3 bg-blue-500">
          <img
            src="https://i.pinimg.com/236x/20/6e/3b/206e3bf32fe66a7f3dfa75fc154d4c81.jpg"
            alt="Register Illustration"
            className=" h-full "
          />
        </div>
      </div>
    </div>
  );
}
