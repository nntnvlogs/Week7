from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello - Chạy ứng dụng Flask đơn giản với Docker Compose."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)