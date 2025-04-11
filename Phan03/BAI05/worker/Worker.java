import redis.clients.jedis.Jedis;
import java.sql.*;

public class Worker {
    public static void main(String[] args) throws SQLException {
        Jedis redis = new Jedis("redis", 6379);
        Connection db = DriverManager.getConnection("jdbc:postgresql://db:5432/voting", "postgres", "postgres");

        while (true) {
            String vote = redis.lpop("votes");
            if (vote != null) {
                PreparedStatement stmt = db.prepareStatement("INSERT INTO votes (vote) VALUES (?)");
                stmt.setString(1, vote);
                stmt.executeUpdate();
                System.out.println("Stored vote: " + vote);
            }
        }
    }
}