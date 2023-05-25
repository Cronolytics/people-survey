pipeline {
     agent any
     stages {
        stage("Estágio 1 - Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Estágio 2 - Deploy") {
            steps {
                sh "sudo rm -rf /var/www/people"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/people/"
            }
        }
    }
}