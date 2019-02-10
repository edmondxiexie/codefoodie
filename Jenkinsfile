pipeline {
    agent any
    
    tools {nodejs "my nodejs"}
    
    stages {
        stage('Start') {
            steps {
                // send build started notifications
                slackSend (color: '#f1c40f', message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} STARTED by user ${env.CHANGE_AUTHOR} (${env.BUILD_URL})")
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
            slackSend (color: '#27ae60', message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} SUCCESS after ${currentBuild.durationString} (${env.BUILD_URL})")
        }

        failure {
            slackSend (color: '#e74c3c', message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} FAILURE after ${currentBuild.durationString} (${env.BUILD_URL})")
        }
    }
}