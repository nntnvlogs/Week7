# Sử dụng Python làm base image
FROM python:3.9

# Cài đặt thư viện cần thiết
WORKDIR /app
COPY app.py /app
RUN pip install flask

# Chạy Flask app
CMD ["python", "app.py"]