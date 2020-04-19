#!/bin/sh

sudo useradd -m -p "ansible" ansible
sudo usermod -aG sudo ansible
sudo usermod -aG wheel ansible
sudo runuser -l ansible -c "mkdir /home/ansible/.ssh/"
sudo runuser -l ansible -c "chmod 700 /home/ansible/.ssh/"
sudo runuser -l ansible -c "touch /home/ansible/.ssh/authorized_keys"
sudo runuser -l ansible -c "chmod 600 /home/ansible/.ssh/authorized_keys"
sudo runuser -l ansible -c "echo 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCpCm5MdGExF/1CzUNsbw4RBai7kMpmR7JhYZtbAGGShYRR/NiLH2GJjaDpQ2mO6JbQBvyfxs7dW+cJNBK4uhxQUuIg2wvnaLsz5EUVYwSXOJbHLqUepFjIwu7EeAFYOZiHvr3ZNNa5eqE5JQWdyiDrk4oBdmFzACmTiKaDhd5FDAmYO0u+nb9we+EQ94ZcT96KDk1tlUmi919rrNiiV328e5mYn6cB4FbyqYRAYgGgBXsmRP2oRlaHltBC9Mb47mYIf1YileeGLm72D148BOGXU/aeG0oIXrStqrhiXF5+j9wCgWqoovXzAX+mRZYwM06wU1xZLDyO18mZgZWIu5bJ useast2' > /home/ansible/.ssh/authorized_keys"
echo "ansible ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/ansible
sudo chmod 0440 /etc/sudoers.d/ansible