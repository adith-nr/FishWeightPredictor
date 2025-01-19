import numpy as np
import pandas as pd
from flask import Flask,request,jsonify
from sklearn.impute import SimpleImputer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import StandardScaler 
df = pd.read_csv('Fish.csv')


X = df.drop(columns='Weight').values
y = df['Weight'].values

ct = ColumnTransformer(transformers=[('encode',OneHotEncoder(),[0])],remainder='passthrough')
X = np.array(ct.fit_transform(X))

imputer = SimpleImputer(strategy='mean')
imputer.fit(X[:,7:])
X[:,7:]=imputer.transform(X[:,7:])


X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)

sc = StandardScaler()
sc2 = StandardScaler()
X_train[:,7:] = sc.fit_transform(X_train[:,7:])
X_test[:,7:] = sc.transform(X_test[:,7:])
y_train =y_train.reshape(len(y_train),1)
y_train=sc2.fit_transform(y_train)



poly_reg= PolynomialFeatures(degree=2)
X_poly_train = poly_reg.fit_transform(X_train)
regressor = LinearRegression()
regressor.fit(X_poly_train,y_train)

import joblib

# Save model and preprocessing objects
joblib.dump(regressor, 'model.pkl')  # Save trained model
joblib.dump(poly_reg, 'poly_transform.pkl')  # Save polynomial features transformer
joblib.dump(sc, 'scaler.pkl')  # Save input feature scaler
joblib.dump(sc2, 'scaler_y.pkl')  # Save target variable scaler
joblib.dump(ct, 'column_transform.pkl')  # Save column transformer

print("Model and preprocessors saved successfully!")
