mvn io.quarkus.platform:quarkus-maven-plugin:2.7.5.Final:create \
    -DprojectGroupId=io.cncf \
    -DprojectArtifactId=panorama \
    -DclassName="org.acme.datasource.GreetingResource" \
    -Dextensions="neo4j,resteasy-reactive-jackson"

