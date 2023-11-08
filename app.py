from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/lg")
def lg():
    return redirect("https://iao.funsite.cz/")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
