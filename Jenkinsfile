pipeline {
  agent any
 
  tools {nodejs "my nodejs"}
 
  stages {

    stage('Checkout') {
      steps {
        checkout([$class: 'SubversionSCM', 
            additionalCredentials: [], 
            excludedCommitMessages: '', 
            excludedRegions: '', 
            excludedRevprop: '', 
            excludedUsers: 'buildbot', 
            filterChangelog: false, 
            ignoreDirPropChanges: false, 
            includedRegions: '', 
            locations: [[credentialsId: '39bb4fa1-56ce-4ddf-9bd7-86528cb798ec', 
                depthOption: 'infinity', 
                ignoreExternalsOption: true, 
                local: '.', 
                remote: "http://svn/something/trunk/"]],
            workspaceUpdater: [$class: 'UpdateUpdater']])      
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