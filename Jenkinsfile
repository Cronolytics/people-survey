pipeline {
     agent any
     stages {
        stage("Estágio 1 - Build") {
            steps {
                sh "sudo npm install &" 
            }
        }
        stage("Estágio 2 - Deploy") {
            steps {
                sh "/tmp/jenkins/script.sh"
            }
        }
    }
}