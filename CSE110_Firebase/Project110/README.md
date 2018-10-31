://travis-ci.org/TripleSpiked/CSE110Lab5.svg?branch=master*
 * art.ml
 * cs334
 * based on code by Chris Stone
 *)

#use "misc.ml"
#use "expr.ml"

(******************* Functions you need to write **********)

(* build: (int*int->int) * int -> Expr 
   Build an expression tree.  The second argument is the depth, 
   the first is a random function.  A call to rand(2,5) will give
   you a random number in the range [2,5)  
   (2 inclusive, and 5 exclusive).

   Your code should call buildX, buildSine, etc. to construct
   the expression.
*)

let rec build (rand,depth) = failwith "to be implemented"

let rec build2 (rand,depth) = failwith "to be implemented"

(* Please fill in ALL of g1,g2,g3,c1,c2,c3 regardless of whether you
 * are aiming for extra credit. 
 *)

(* g1,g2,g3,c1,c2,c3 : unit -> int * int * int
 * these functions should return the parameters needed to create your 
 * top three color / grayscale pictures.
 * they should return (depth,seed1,seed2)
 *)

let g1 () = failwith "to be implemented"  
let g2 () = failwith "to be implemented"  
let g3 () = failwith "to be implemented"  

let c1 () = failwith "to be implemented"
let c2 () = failwith "to be implemented" 
let c3 () = failwith "to be implemented" 

(**** You should not need to modify any code below here ****)


(******************** Random Number Generators ************)

(* makeRand int * int -> (int * int -> int)
   Returns a function that, given a low and a high, returns
