FROM openjdk:11
WORKDIR /app

# Cài đặt wget để tải thư viện
RUN apt-get update && apt-get install -y wget

# Tải các thư viện cần thiết (Jedis, Gson, PostgreSQL JDBC Driver)
RUN wget https://repo1.maven.org/maven2/redis/clients/jedis/4.3.1/jedis-4.3.1.jar -O /app/jedis.jar
RUN wget https://repo1.maven.org/maven2/com/google/code/gson/gson/2.8.9/gson-2.8.9.jar -O /app/gson.jar
RUN wget https://jdbc.postgresql.org/download/postgresql-42.5.1.jar -O /app/postgresql.jar

# Copy file Java
COPY Worker.java .

# Biên dịch Worker.java với đầy đủ thư viện
RUN javac -cp .:jedis.jar:gson.jar:postgresql.jar Worker.java

# Chạy chương trình Worker
CMD ["java", "-cp", ".:jedis.jar:gson.jar:postgresql.jar", "Worker"]