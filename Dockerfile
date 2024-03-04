FROM maven:3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.2-jdk-slim
COPY --from=build /target/gestion_centre_formation_spring-0.0.1-SNAPSHOT.jar gestion_centre_formation_spring.jar
EXPOSE 8080
LABEL authors="LENOVO"

ENTRYPOINT ["java", "-jar","gestion_centre_formation.jar"]
