# Use Java 21 LTS image (lightweight)
FROM eclipse-temurin:21-jdk-alpine

# Set working directory inside container
WORKDIR /app

# Copy the generated JAR into the container
COPY build/libs/*.jar app.jar

# Expose Spring Boot port
EXPOSE 8081

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
