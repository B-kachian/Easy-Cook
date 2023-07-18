import React, { Component } from 'react';


class Register extends Component {
    state = {  } 
    render() { 
        return (
        <div>

<form style={{ color:'black', position:'relative', top:'40px'}}class="row g-3">

<div class="col-md-4">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputEmail4"></input>
  </div>
  <div class="col-md-4">
    <label for="inputEmail4" class="form-label">Last Name</label>
    <input type="text " class="form-control" id="inputEmail4"></input>
  </div>
  <div class="col-md-4">
    <label for="inputEmail4" class="form-label">Age</label>
    <input type="number12" class="form-control" id="inputEmail4"></input>
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"></input>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">City</label>
    <select id="inputState" class="form-select">
      <option selected>London</option>
      <option selected>Los Angles</option>
      <option selected>Tehran</option>
      <option selected>Other</option>
      <option selected>...</option>

    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"></input>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>



        </div>);
    }
}
 
export default Register;