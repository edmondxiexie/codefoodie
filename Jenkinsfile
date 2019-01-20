pipeline {
  agent any
 
  tools {nodejs "my nodejs"}
 
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/edmondxiexie/codefoodie'
      }
    }
    
    stage('Frontend Install dependencies and Build') {
      steps {
        dir('client') {
            sh 'npm install'
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