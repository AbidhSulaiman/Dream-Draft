import requests

session = requests.Session()
url = 'http://127.0.0.1:8000/api/login/'

get_response = requests.get(url)

csrf_token = session.cookies.get('csrftoken')
headers = {
    'X-CSRFToken': csrf_token
}

deta = {
    'username':'abidh',
    'password':'abidhpassword'
}

response = session.post(url, data=deta, headers=headers)

print(response.status_code)
# print(response.text)