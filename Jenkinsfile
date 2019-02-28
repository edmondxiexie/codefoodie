pipeline {
    agent any
    
    tools {nodejs "nodejs"}
    
    stages {
        stage('Start') {
            steps {
                // send build started notifications
                slackSend (color: '#3498db', message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} STARTED (${env.BUILD_URL})")
            }
        }

        // stage('Cloning Git') {
        //     steps {
        //         git branch: "master", url: 'https://github.com/edmondxiexie/codefoodie'
        //     }
        // }
        
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

        stage('Deploy for production') {
            when {
                branch 'master'
            }
            steps {
                sh 'scp -r client/dist root@157.230.131.190:~/codefoodie/client'
                sh 'scp -r server root@157.230.131.190:~/codefoodie'
            }
        }

        stage('Test for production') {
            when {
                branch 'issue/19'
            }
            steps {
                sh 'scp -r client/dist root@157.230.131.190:~/codefoodie/client'
                sh 'scp -r server root@157.230.131.190:~/codefoodie'
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