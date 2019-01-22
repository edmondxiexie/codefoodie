pipeline {
  agent any
 
  triggers { 
    pollSCM('0 0 0 0 0') 
  }

  tools {nodejs "my nodejs"}
 
  stages {

    stage('Checkout') {
      steps {
        properties([pipelineTriggers([[$class: 'GitHubPushTrigger'], pollSCM('* * * * *')])])
        checkout scm 
      }
    }

    stage('Cloning Git') {
      steps {
        git 'https://github.com/edmondxiexie/codefoodie'
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
    
    stage('Test') {
      steps {
        dir('server') {
            sh 'npm test'
        }
      }
    }
  }
}