from flask import Flask, escape, request, render_template, redirect, url_for
import subprocess
import os
import shlex

app = Flask(__name__)

git = "cd /home/$USER/Ulrena/modules; ansible-playbook git.yml"
apache = "cd /home/$USER/Ulrena/modules; ansible-playbook webserver.yml"
maven = "cd /home/$USER/Ulrena/modules; ansible-playbook maven.yml"
tomcat = "cd /home/$USER/Ulrena/modules; ansible-playbook tomcat.yml"
sonarqube = "cd /home/$USER/Ulrena/modules; ansible-playbook sonarqube.yml"
jenkins = "cd /home/$USER/Ulrena/modules; ansible-playbook jenkins.yml"
kubernetes = "cd /home/$USER/Ulrena/modules/k8s; ansible-playbook roles.yml"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/error")
def error():
    return render_template("error.html")

@app.route("/gitip")
def gitip():
    return render_template("gitip.html")

@app.route("/gitip", methods=["GET", "POST"])
def ip_post():
    ipaddrs = request.form["ipaddrs"]
    iplist = ipaddrs.split(',')
    with open('modules/hosts', 'w') as f:
        f.write('''[machines:vars]
ansible_ssh_private_key_file=./useast2.pem

[machines]
''')
        for item in iplist:
            f.write("%s\n" % item)
    run_playbook = os.system(git)
    if run_playbook == 0:
        return git_success()
    else:
        return git_fail()

@app.route("/git_success")
def git_success():
    return render_template("git_success.html")

@app.route("/git_fail")
def git_fail():
    return render_template("git_fail.html")

@app.route("/apacheip")
def apacheip():
    return render_template("apacheip.html")

@app.route("/apacheip", methods=["GET", "POST"])
def ip_post2():
    ipaddrs = request.form["ipaddrs"]
    iplist = ipaddrs.split(',')
    with open('modules/hosts', 'w') as f:
        f.write('''[machines:vars]
ansible_ssh_private_key_file=./useast2.pem

[machines]
''')
        for item in iplist:
            f.write("%s\n" % item)
    run_playbook = os.system(apache)
    if run_playbook == 0:
        return apache_success()
    else:
        return apache_fail()

@app.route("/apache_fail")
def apache_fail():
    return render_template("apache_fail.html")

@app.route("/apache_success")
def apache_success():
    return render_template("apache_success.html")

@app.route("/mavenip")
def mavenip():
    return render_template("mavenip.html")

@app.route("/mavenip", methods=["GET", "POST"])
def ip_post3():
    ipaddrs = request.form["ipaddrs"]
    iplist = ipaddrs.split(',')
    with open('modules/hosts', 'w') as f:
        f.write('''[machines:vars]
ansible_ssh_private_key_file=./useast2.pem

[machines]
''')
        for item in iplist:
            f.write("%s\n" % item)
    run_playbook = os.system(maven)
    if run_playbook == 0:
        return maven_success()
    else:
        return maven_fail()

@app.route("/maven_success")
def maven_success():
    return render_template("maven_success.html")

@app.route("/maven_fail")
def maven_fail():
    return render_template("maven_fail.html")

@app.route("/tomcatip")
def tomcatip():
    return render_template("tomcatip.html")

@app.route("/tomcatip", methods=["GET", "POST"])
def ip_post4():
    ipaddrs = request.form["ipaddrs"]
    iplist = ipaddrs.split(',')
    with open('modules/hosts', 'w') as f:
        f.write('''[machines:vars]
ansible_ssh_private_key_file=./useast2.pem

[machines]
''')
        for item in iplist:
            f.write("%s\n" % item)
    run_playbook = os.system(tomcat)
    if run_playbook == 0:
        return tomcat_success()
    else:
        return tomcat_fail()

@app.route("/tomcat_success")
def tomcat_success():
    return render_template("tomcat_success.html")

@app.route("/tomcat_fail")
def tomcat_fail():
    return render_template("tomcat_fail.html")

@app.route("/sonarqubeip")
def sonarqubeip():
    return render_template("sonarqubeip.html")

@app.route("/sonarqubeip", methods=["GET", "POST"])
def ip_post5():
    ipaddrs = request.form["ipaddrs"]
    iplist = ipaddrs.split(',')
    with open('modules/hosts', 'w') as f:
        f.write('''[machines:vars]
ansible_ssh_private_key_file=./useast2.pem

[machines]
''')
        for item in iplist:
            f.write("%s\n" % item)
    run_playbook = os.system(sonarqube)
    if run_playbook == 0:
        return sonarqube_success()
    else:
        return sonarqube_fail()

@app.route("/sonarqube_success")
def sonarqube_success():
    return render_template("sonarqube_success.html")

@app.route("/sonarqube_fail")
def sonarqube_fail():
    return render_template("sonarqube_fail.html")

@app.route("/jenkinsip")
def jenkinsip():
    return render_template("jenkinsip.html")

@app.route("/jenkinsip", methods=["GET", "POST"])
def ip_post6():
    ipaddrs = request.form["ipaddrs"]
    iplist = ipaddrs.split(',')
    with open('modules/hosts', 'w') as f:
        f.write('''[machines:vars]
ansible_ssh_private_key_file=./useast2.pem

[machines]
''')
        for item in iplist:
            f.write("%s\n" % item)
    run_playbook = os.system(jenkins)
    if run_playbook == 0:
        return jenkins_success()
    else:
        return jenkins_fail()

@app.route("/jenkins_success")
def jenkins_success():
    return render_template("jenkins_success.html")

@app.route("/jenkins_fail")
def jenkins_fail():
    return render_template("jenkins_fail.html")

@app.route("/kubernetesip")
def kubernetesip():
    return render_template("kubernetesip.html")


@app.route("/kubernetesip", methods=["GET", "POST"])
def ip_post7():
    ipaddrs = request.form["masterips"]
    iplist = ipaddrs.split(',')
    with open('modules/k8s/hosts.ini', 'w') as f:
        f.write('''[kube-cluster:vars]
ansible_ssh_private_key_file=../useast2.pem

[kube-cluster:children]
master
node

[master]
''')
        for item in iplist:
            f.write("%s\n" % item)

    ipaddrs2 = request.form["workerips"]
    iplist2 = ipaddrs2.split(',')
    with open('modules/k8s/hosts.ini', 'a') as f:
        f.write('''
[node]
''')
        for item in iplist2:
            f.write("%s\n" % item)
    run_playbook = os.system(kubernetes)
    if run_playbook == 0:
        return kubernetes_success()
    else:
        return kubernetes_fail()

@app.route("/kubernetes_success")
def kubernetes_success():
    return render_template("kubernetes_success.html")

@app.route("/kubernetes_fail")
def kubernetes_fail():
    return render_template("kubernetes_fail.html")