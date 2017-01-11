import jobs.generation.Utilities;
import jobs.generation.InternalUtilities;

def project = GithubProject
def branch = GithubBranchName

[true, false].each { isPR ->
    def newJobName = InternalUtilities.getFullJobName(project, "Default", isPR)
    def newJob = job(newJobName) {
        steps {
            shell("./jenkins.sh")
        }

        // if (!isPR) {
        //     wrappers {
        //         credentialsBinding {
        //             string('PXT_ACCESS_TOKEN', 'pxt_access_token')
        //             string('PXT_RELEASE_REPO', 'pxt_release_repo_adafruit')
        //         }
        //     }
        // }
    }

    Utilities.setMachineAffinity(newJob, 'Ubuntu', '20161020')
    InternalUtilities.standardJobSetup(newJob, isPR, "")
}