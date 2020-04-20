# Ulrena - Utility Arena
Ulrena ansible scripts

* Masternode as Ubuntu.
* Run all three ssh on master.
* Run user.sh on all the systems.

1. ```Clone``` and ```cd``` to directory.
2. Activate virtualenv: ```virtualenv -p python3 .```
3. Install all requirements: ```pip3 install -r requirements.txt```
4. Set flask env: ```export FLASK_APP=main.py```
5. Run: ```flask run```

* Bind flask port 5000 to 8080: ```sudo socat TCP-LISTEN:8080,fork TCP:127.0.0.1:5000```
