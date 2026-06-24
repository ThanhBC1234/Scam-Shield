# Xuất model cho Scam Shield

Chuẩn bị tệp CSV UTF-8 có đúng hai cột:

```csv
text,label
"Ngân hàng không bao giờ yêu cầu bạn đọc OTP",0
"Gửi mã OTP ngay để tránh khóa tài khoản",1
```

- `label=0`: nội dung an toàn hoặc cảnh báo phòng chống lừa đảo.
- `label=1`: nội dung có dấu hiệu lừa đảo.
- Không dùng OTP, số tài khoản, số điện thoại hoặc dữ liệu cá nhân thật.

Chạy:

```powershell
pip install -r requirements.txt
python train_export.py dataset.csv --output ../web_app/js/model.js
```

Script dùng stratified k-fold cross-validation, sau đó ghi trọng số và số liệu vào `web_app/js/model.js`. Người dùng cuối không phải tải model; trình duyệt nạp file này cùng website.

## Lưu ý về tên `model.js`

`web_app/js/model.js` chỉ dành cho trọng số ML được xuất từ script trên. File `model.js` dạng cũ có hàm `analyzeScamText()` thực chất là bộ regex, không thể chép đè trực tiếp. Các rule và combo hữu ích của engine đó đã được tích hợp vào `web_app/js/app.js`.
