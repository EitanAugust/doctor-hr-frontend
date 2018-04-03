import requests

r = requests.post("http://vcm-3746.vm.duke.edu:5000/api/heart_rate", json={"user_email": "augustel21@gmail.com", "user_age": 21, "heart_rate": 70})

r1 = requests.get("http://vcm-3746.vm.duke.edu:5000/api/heart_rate/augustel21@gmail.com")
hrs = r1.json()
print(hrs)

r2 = requests.post("http://vcm-3746.vm.duke.edu:5000/api/heart_rate/interval_average", json={"user_email": "augustel21@gmail.com",
                                                                                  "heart_rate_average_since": "2011-05-03 17:45:35.177000"})
avgs = r2.json()
print(avgs)