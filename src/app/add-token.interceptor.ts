import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  if (req.method == 'GET') return next(req);
  else {
    let token = localStorage.getItem('accessToken');
    if (token) {
      let h = new HttpHeaders().set('Authorization', `bearer ${token}`);
      let cloneReq = req.clone({
        headers: h,
      });

      return next(cloneReq);
    }

    return next(req);
  }
};
