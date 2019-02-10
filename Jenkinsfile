pipeline {
    agent any
    
    tools {nodejs "my nodejs"}
    
    stages {
        stage('Start') {
            steps {
                // send build started notifications
                slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
            }
        }

        stage('Cloning Git') {
            steps {
                git branch: "develop", url: 'https://github.com/edmondxiexie/codefoodie'
            }
        }
        
        stage('Frontend Install dependencies') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }
            
        stage('Frontend Build') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Backend Install dependencies') {
            steps {
                dir('server') {
                    sh 'npm install'
                }
            }
        }
    }

    post {
        success {
            slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }

        failure {
            slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
    }
}