pipeline {
    agent any
    
    tools {nodejs "my nodejs"}
    
    stages {
        stage('Start') {
            steps {
                // send build started notifications
                slackSend (color: '#3498db', message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} STARTED (${env.BUILD_URL})")
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
            slackSend (color: '#2ecc71', message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} SUCCESS after ${currentBuild.durationString.replace(' and counting', '')} (${env.BUILD_URL})")
        }

        failure {
            slackSend (color: '#e74c3c', message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} FAILURE after ${currentBuild.durationString.replace(' and counting', '')} (${env.BUILD_URL})")
        }
    }
}