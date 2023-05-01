from flask import Flask, request


app = Flask(__name__)


@app.route('/', methods=['GET'])
def g():
    return "hiiiii"


@app.route('/api/query', methods=['POST'])
def get_query_from_react():
    data = request.get_json()
    print(data)
    return data
