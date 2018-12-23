
 area={

 square :					 (s)  	=>		    {  return s*s },
 circle :     				 (r) 	=>	  		{return Math.PI*r*r},
 triangle :    				 (b,h) 	=>	    {return 0.5*b*h},
 trapezium :    			 (a,b,h)=>	    {return 0.5*(a+b)*h},
 ellipse :     				 (a,b)  =>	    {return Math.PI*a*b},
 parallelogram :   		 	 (b,h)	=>	    {return b*h},
 sector :     				 (r,theta)=>	{return 0.5*r*r*theta}

}
module.exports=area;

