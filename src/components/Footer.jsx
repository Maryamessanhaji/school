import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-[rgb(0,61,79)] mt-36 text-white py-8 dark:bg-drkColor border-t-4 border-[#2DD4BF]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">معلومات عنا</h3>
            <p className="text-sm">
              نحن فريق ملتزم بتقديم خدمات تعليمية متميزة، تركز على تطوير مهارات
              الطلاب وتمكينهم لتحقيق أحلامهم.
            </p>
          </div>

          {/* Links Section */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>الهاتف: +123 456 7890</li>
              <li>البريد الإلكتروني: info@example.com</li>
              <li>العنوان: شارع النجاح، المغرب</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
