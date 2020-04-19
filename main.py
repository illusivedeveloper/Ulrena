from flask import Flask, escape, request, render_template, redirect, url_for
import subprocess
import urllib
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
    execute()
    return ipaddrs

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
    execute()
    return ipaddrs

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
    execute()
    return ipaddrs

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
    execute()
    return ipaddrs

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
    execute()
    return ipaddrs

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
    execute()
    return ipaddrs

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


def execute():
    pass