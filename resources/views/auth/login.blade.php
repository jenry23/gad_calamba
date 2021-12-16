@extends('layouts.app')
@section('content')

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Verify Your Account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label>Resident ID</label>
<input type="text" class="form-control" name="resident_id" id="resident_id">
      <div class="row" id="details"></div>
    </div>
      <div class="modal-footer">
        <button type="button"  onclick="searchData()" class="btn btn-primary">Search</button>
      </div>
    </div>
  </div>
</div>
<div class="wrapper wrapper-full-page">
    <div class="page-header login-page header-filter">
        <div class="container">
            <div class="row" >
                <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                    <form class="form" method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="card card-login" style="opacity: 0.9;">
                            <div class="card-header card-header-primary text-center">
                            <img class="img-fluid float-left" style="height:50px;width:50px;" src="/images/calamba-logo.png">
                                <h4 class="card-title" style="margin-right:30px">LOGIN</h4>
                            </div>

                            @if(session('status'))
                                <div class="card-body" style="padding: .9375rem 20px;">
                                    <p class="alert alert-primary">
                                        {{ session('status') }}
                                    </p>
                                </div>
                            @endif
                            <div class="card-body" >

                                <img class="img-fluid" style="margin-left:42px;height:250px;width:250px;" src="/images/calamba-logo.png">
                                <div class="bmd-form-group"  >
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="material-icons">email</i>
                                            </span>
                                        </div>
                                        <input name="email" type="email" class="form-control pl-2" placeholder="{{ __('global.login_email') }}..." value="{{ old('email') }}" required autocomplete="email" autofocus>
                                    </div>
                                    @error('email')
                                        <div class="error" for="email">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                                <div class="bmd-form-group">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">
                                                <i class="material-icons">lock_outline</i>
                                            </span>
                                        </div>
                                        <input name="password" type="password" class="form-control pl-2" placeholder="{{ __('global.login_password') }}..." autocomplete="current-password" required>
                                    </div>
                                    @error('password')
                                        <div class="error" for="email">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" name="remember" class="form-check-input">
                                        <span class="form-check-sign"><span class="check"></span></span>
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div class="card-footer justify-content-center flex-column">
                                <button type="submit" class="btn btn-round btn-primary">
                                    {{ __('global.login') }}
                                </button>

                                <div class="d-flex justify-content-between">

                                    @if(Route::has('password.request'))
                                        <a class="btn btn-link btn-primary" href="{{ route('password.request') }}">
                                            {{ __('global.forgot_password') }}
                                        </a>
                                    @endif

                                    <!-- @if(Route::has('register'))
                                        <a class="btn btn-link btn-primary" href="{{ route('register') }}">
                                            {{ __('global.register') }}
                                        </a>
                                    @endif -->
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
