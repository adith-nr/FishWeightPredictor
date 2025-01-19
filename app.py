from flask import Flask,request,jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)
model = joblib.load('model.pkl')
poly_reg = joblib.load('poly_transform.pkl')
sc = joblib.load('scaler.pkl')
sc2 = joblib.load('scaler_y.pkl')
ct = joblib.load('column_transform.pkl')

@app.route('/predict',methods=['POST'])

def predict():
    try:
        
        data = request.get_json()
        
        print(data['features'])
        
       
        features_transformed=np.array([data['features']])
        features_transformed[:, 7:] = sc.transform(features_transformed[:, 7:])
        features_poly = poly_reg.fit_transform(features_transformed)


        prediction = model.predict(features_poly)

        prediction = sc2.inverse_transform(prediction)

        return jsonify({'prediction':prediction.tolist()})
    except Exception as e:
        return jsonify({'error':str(e)})
    
if __name__ == '__main__':
    app.run(debug=True)
