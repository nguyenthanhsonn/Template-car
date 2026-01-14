# AutoCare & Tuning Website

Website chuyên nghiệp cho dịch vụ chăm sóc và tuning xe hơi, được xây dựng với Next.js 14, TypeScript và Tailwind CSS.

## 🚀 Công nghệ sử dụng

- **Next.js 14** - App Router (chuẩn mới nhất)
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling và responsive design

## 📋 Tính năng

- ✅ Responsive design cho mọi kích thước màn hình (mobile, tablet, desktop)
- ✅ Design system nhất quán với palette màu đen tối, nâu đen và đỏ rực
- ✅ Hiệu ứng hover và transition mượt mà
- ✅ Tối ưu hóa hình ảnh với Next.js Image component
- ✅ SEO-friendly và accessibility tốt
- ✅ Cấu trúc component rõ ràng, dễ maintain

## 🏗️ Cấu trúc project

```
/app
  /layout.tsx          # Root layout với Header và Footer
  /page.tsx            # Trang chủ
  /about/page.tsx      # Trang giới thiệu
  /services/page.tsx   # Trang dịch vụ
  /gallery/page.tsx    # Trang thư viện
  /contact/page.tsx    # Trang liên hệ

/components
  /ui                  # Component tái sử dụng
    - button.tsx
    - service-card.tsx
  /layout              # Component bố cục
    - header.tsx
    - footer.tsx
    - navbar.tsx
```

## 🎨 Design System

### Màu sắc
- **Nền tối**: `#0a0a0a` (đen tối)
- **Nền nâu đen**: `#1a1612` (nâu đen)
- **Màu nhấn**: `#dc2626` (đỏ rực)
- **Màu nhấn hover**: `#b91c1c` (đỏ đậm)
- **Chữ trắng**: `#ffffff`
- **Chữ xám**: `#9ca3af`, `#6b7280`

## 🚀 Cách chạy project

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem kết quả.

### Build cho production

```bash
npm run build
```

### Chạy production server

```bash
npm start
```

## 📝 Ghi chú

- Tất cả các trang đã được tạo với nội dung mẫu, bạn có thể tùy chỉnh theo nhu cầu
- Hình ảnh trong gallery là placeholder, hãy thay thế bằng hình ảnh thực tế
- Form liên hệ hiện chỉ log ra console, bạn cần tích hợp với backend API thực tế

## 📚 Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
