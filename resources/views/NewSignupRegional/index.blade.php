@extends('NewSignupRegional.layout')

@section('title', 'Signup')



@section('content')
<div class="row">
    <div class="col-md-12 text-center mb-4">
        <img alt="logo" src="https://nikkenlatam.com/oficina-virtual/assets/images/general/logo-header-black.png" class="theme-logo">
    </div>
    <div class="menu-reg" style="width: 100%;">
        <div class="row layout-spacing col-md-12">
            <div class="container">
                <ol class="breadcrumb breadcrumb-arrow">
                    <li><a href="javascript:void(0)">Start / Inicio</a></li>
                    <li class="active"><span>Register / Registro</span></li>
                    <li class="active"><span>Confirmation / Confirmación</span></li>
                </ol>
            </div>
        </div>

        <div class="col-md-12 text-center mb-4">
            <br>
            <h3><span><b>Select your country / Selecciona tú país</b></span></h3>
        </div>
        <div class="col-md-12 tooltip-section" style="text-align: center; opacity: 1;">
            <div class="row justify-content-center">
                <div class="form-group col-md-3">

                    <a href="/profile/mex/" value="en">
                        <img src="{{asset('regchileasset/img/mex.png')}}" class="img_country rounded bs-toolti"  data-toggle="tooltip" data-placement="left" title="México">
                    </a>
                    <br>
                    <label for="full-name" class="text-center"> <b>México</b></label>
                </div>
                <div class="form-group col-md-3">

                    <a href="/profile/per/" value="en">
                        <img src="{{asset('regchileasset/img/per.png')}}" class="img_country rounded bs-toolti"  data-toggle="tooltip" data-placement="left" title="Perú">
                    </a>
                    <br>
                    <label for="full-name" class="text-center"> <b>Perú</b></label>
                </div>
                <div class="form-group col-md-3">

                    <a href="/profile/col/" value="es">
                        <img src="{{asset('regchileasset/img/col.png')}}" class="img_country rounded bs-toolti"  data-toggle="tooltip" data-placement="left" title="Colombia">
                    </a>
                    <br>
                    <label for="inputEmail" class="text-center"><b>Colombia</b></label>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
<script src="{{asset('regchileasset/js/singup/singup.js')}}"></script>

