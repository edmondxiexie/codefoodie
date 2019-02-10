pipeline {
  agent any
 
  tools {nodejs "my nodejs"}
 
  stages {
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
}