from flask import Flask, render_template
app = Flask(__name__)

n = 0


@app.route("/")
def test():
    global n
    n+=1    
    return render_template('page.html', my_string="Wheeeee!", my_list=[0,1,2,3,4,5], hits=n)

@app.route("/multiply/<int:a>/<int:b>")
def count(a, b):
    return "{}".format(a * b)


    