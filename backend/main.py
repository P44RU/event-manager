from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route("/signup", methods=["GET","POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]
    return jsonify({
        "id": "1",
        "email" : email   
    })

if __name__ == "__main__":
    app.run(debug=True)