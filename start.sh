docker build -t hardboiled-apache .
docker run -dit --name hardboiled-app -p 8083:80 hardboiled-apache