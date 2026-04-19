# hcm202_g2_2026

hcm202_g2_2026 là website thuyết trình được xây dựng bằng **React + Vite** cho chủ đề:

**Tư tưởng Hồ Chí Minh về độc lập dân tộc và cách mạng giải phóng dân tộc**

Dự án được thiết kế theo hướng trình bày nội dung học thuật trên nền tảng web, giúp nhóm có thể vừa trình chiếu, vừa thuyết trình trực tiếp với giao diện hiện đại, bố cục rõ ràng và nội dung được chia thành từng phần lớn để người xem dễ theo dõi.

---

## Mục đích của dự án

Website này được thực hiện nhằm:

- chuyển nội dung thuyết trình từ dạng slide sang giao diện web
- trình bày chủ đề môn học theo hướng trực quan, dễ theo dõi
- hỗ trợ nhóm thuyết trình mạch lạc hơn khi trình chiếu trực tiếp
- kết hợp nội dung lý luận, dẫn chứng, liên hệ thực tiễn và kết luận trong cùng một sản phẩm

---

## Nội dung chính của website

Project hiện triển khai nội dung xoay quanh các phần chính sau:

- Giới thiệu chủ đề
- **Phần I:** Tư tưởng Hồ Chí Minh về độc lập dân tộc
- **Phần II:** Vì sao độc lập dân tộc là lẽ sống và học thuyết của Hồ Chí Minh
- **Phần III:** Vì sao tư tưởng đó là nguồn động viên các dân tộc bị áp bức trên thế giới
- **Phần IV:** Nguồn sức mạnh làm nên chiến thắng của nhân dân Việt Nam
- **Phần V:** Giá trị cổ vũ đối với các dân tộc bị áp bức
- **Phần VI:** Tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc
- **Phần VII:** Liên hệ thực tiễn hiện nay
- Kết luận
- Minh bạch sử dụng AI

---

## Tính năng hiện có

Dựa trên cấu trúc code hiện tại, project đã có các thành phần sau:

- website một trang với nhiều section nội dung lớn
- bố cục trình bày theo dạng học thuật kết hợp giao diện hiện đại
- điều hướng nhanh bằng menu trên đầu trang
- các khối nội dung chia theo phần để phục vụ thuyết trình
- thẻ nội dung dạng card cho luận điểm, dẫn chứng và kết luận
- timeline trình bày các luận điểm chính
- hình ảnh minh họa phục vụ nội dung
- hiệu ứng xuất hiện khi cuộn trang bằng `IntersectionObserver`
- phần minh bạch về việc sử dụng AI trong quá trình làm bài
- giao diện tùy biến bằng CSS thuần trong file `styles.css`

---

## Công nghệ sử dụng

- **React**
- **Vite**
- **JavaScript (JSX)**
- **CSS**

---

## Cấu trúc project

```txt
hcm202_g2_2026/
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── assets/
│       ├── anh2.png
│       └── anh3.png
