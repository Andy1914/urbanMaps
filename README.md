# urbanMaps

Following SOLID principles and loose coupling so that system can be open to extension and closed to modificaitons
each moule has only one responsibility and hence reducing dependency and easily testable.
# 
modular code to support various 3rd party geocode services, currently google geocoder is used i.e various strategy can be used.
# 
using builder patterns to standardise api response and easy addition of parameters, in case new parameter, comes one line modifications will do
 the job.

#steps to run
  make sure node is installed in local
  commands. :  npm install
  to run: npm start
  
 #curl for the api
  curl -X GET \
'http://localhost:3000/V1/api/?address=mallinson%20road%20london%20uk%20co-ordinates' \
-H 'cache-control: no-cache' \
-H 'postman-token: 0e56947a-5e1d-e516-aa37-589b66931b59'
  
