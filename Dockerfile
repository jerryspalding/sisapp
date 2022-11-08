FROM alpine:jdk11

ARG APP_JAR 

COPY ./sisapp-backend/target/SISAppJ-0.0.1.jar /opt/SISApp.jar

expose 8080

entrypoint ["java", "-jar", "/opt/SISApp.jar"]


