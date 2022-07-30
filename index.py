import subprocess
def runcmd(command):
    with subprocess.Popen(subprocess.run(command,shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=15*60,bufsize=1).stdout as sp:
        for line in sp.stdout:
            print(line)
    #if ret.returncode == 0:
    #    print("success:",ret)
    #else:
    #    print("error:",ret)
runcmd(["node","index.js",'--input=newcolormatrix.jpg'])
