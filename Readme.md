# You can find a live version here ---> https://coolcamps.netlify.app/


## Client Routes

|   	       |   URI path	                |  Description  	    |   PROTECTED  |
| --------- | -------------------------- | -----------------  |------------- |
|  	        | `/`       	                |  Index page   	    |          	   |
|          	| `/registro`               	|  User Registration |              |   	
|          	| `/iniciar-sesion`          |  Log In 	          |              |   	
| 	         | `/cerrar-sesion`	          |  Log Out           |   ✅         |   	 
|          	| `/perfil`         	        |  User Profile 	    |   ✅         |  
|	          | `/lista`	                  |  Rent list 	       |   	          | 
|	          | `/anuncio/crear`           |  Create Rent	      |   ✅         |	   
|	          | `/detalles/:rent_id`  	    |  Rent Details 	    |   	          |   
| 	         | `/comentario/crear`	       |  Create Comment  	 |   ✅ 	       |   	  	
|	          | `/*`	                      |  Not Found	        |   	          |


## Server Routes


|   HTTP Method	|   URI path	                |  Description 	     |   JSON	|
| -----------   | -------------------------- | ------------------ |--------- |	  	
| POST          | `/signup`                 	|  Create user       |      	|
| POST	         | `/login`	                  |  User login	       |          |
| PUT	          | `/profile/edit`	           |  Edit user profile |   	    |    
| DELETE	       | `/user/delete`	            |  Delete user	      |       	|  
| GET	          | `/user/:user_id`          	|  User details	     |    ✅    | 
| GET	          | `/getAllRents`   	         |  Rent list         |    ✅    |   
| GET     	     | `/rent/:rent_id`	          |  Rent details	     |    ✅    |
| PUT     	     | `/saveRent`   	            |  Save rent	        |     	    | 
| PUT           | `/rent/edit/`	             |  Rent edit	        |          |    
| DELETE        | `/rent/delete/`	           |  Rent delete	      |          |  
| POST         	| `/rent/create`	            |  Rent form 	       |   	    | 
| POST	         | `/post/create`	            |  Post form 	       |      	| 
| DELETE	       | `/post/delete`	            |  Delete Post       |      	| 
 

  	



