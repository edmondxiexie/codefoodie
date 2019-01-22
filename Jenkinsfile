pipeline {
  agent any
 
  triggers { 
    pollSCM(') 
  }

  tools {nodejs "my nodejs"}
 
  stages {

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