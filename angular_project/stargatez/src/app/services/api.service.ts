import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConstants } from '../../assets/constants/app.constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
}) 
export class ApiService {
  baseURL: string = `${appConstants.careerFluteAppURL}/api`;
  showSpinner$ = new BehaviorSubject<boolean>(false);
  jsonFilePath = 'assets/json/blogs.json';
  // submitCvUrl: any = "https://careerflute.com/api/save-resume";

  constructor(private http: HttpClient) { }

  parseResumeAllFiles(file: any) {
    const formData = new FormData();
    formData.append('resume_file', file);
    return this.http.post(`${this.baseURL}/parse-resume`, formData, {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }

  getDynamicDay(day) {
    return (+day > 1 || +day === 0) ? 'Days' : 'Day';
  }

  getDynamicYear(year) {
    return (+year > 1 || +year === 0 || year === '30+') ? 'Years' : 'Year';
  }

  getDynamicMonth(month) {
    return (+month > 1 || +month === 0) ? 'Months' : 'Month';
  }

  getDynamicLac(lac) {
    return (+lac > 1 || +lac === 0) ? 'Lacs' : 'Lac';
  }

  getDynamicThousand(thousand) {
    return (+thousand > 1 || +thousand === 0) ? 'Thousands' : 'Thousand';
  }

  submitCvData(formData: any) {
    const data = new FormData();
    if (formData.resumeFile) data.append('resume_file', formData.resumeFile);
    if (formData.partnerName) data.append('partner_name', formData.partnerName);
    if (formData.partnerEmail) data.append('partner_email', formData.partnerEmail);
    if (formData.partnerPhoneNumber) data.append('partner_phone_number', formData.partnerPhoneNumber);
    if (formData.partner_id) data.append('partner_id', formData.partner_id);

    data.append('candidate_name', formData.fullName);
    data.append('phone_number', formData.phoneNumber);
    data.append('email', formData.email);
    data.append('skills', formData.skills.join(','));
    data.append('total_experience_years', formData.totalExpYear);
    data.append('total_experience_months', formData.totalExpMonth);
    data.append('relevant_experience_years', formData.relevantExpYear);
    data.append('relevant_experience_months', formData.relevantExpMonth);
    data.append('current_company', formData.currentCompany || '');
    data.append('current_location', formData.currentLocation || '');
    data.append('preferred_location', formData.preferredLocation || '');
    data.append('current_salary_lacs', formData.currentSalaryLacs || '');
    data.append('current_salary_thousands', formData.currentSalaryThousands || '');
    data.append('expected_salary_lacs', formData.expectedSalaryLacs || '');
    data.append('expected_salary_thousands', formData.expectedSalaryThousands || '');
    data.append('notice_period', formData.noticePeriod || '');
    data.append('country_code', formData.countryCode || '');
    data.append('designation', formData.designation || '');
    data.append('qualification', formData.qualification || '');
    data.append('university', formData.university || '');
    data.append('industry', formData.industry || '');
    data.append('home_town', formData.homeTown || '');
    data.append('comments', formData.comments || '');
    data.append('resume_content', formData.resumeContent || '');
    data.append('submitted_from', formData.submitted_from || '');

    return this.http.post(`${this.baseURL}/save-resume`, data, {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }

  fetchAllCountries() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  fetchAllCities(params: { search: string }) {
    return this.http.post(`${this.baseURL}/cities?search=${params.search}`, params);
  }

  fetchAllPartners(params: { search: string }) {
    return this.http.post(`${this.baseURL}/partners?search=${params.search}`, params);
  }

  // fetchResumeParsing(params) {
  //   return this.http.post(`https://careerflute.com/api/parse-resume-ats`, params);
  // }

  // fetchResumeScore(params, id) {
  //   return this.http.post(`https://careerflute.com/api/parse-ats-score?ats_uuid=${id}`, params);
  // }

  // New APIs from Postman JSON
  parseResumeAts(file: File) {
    const formData = new FormData();
    formData.append('resume_file', file);
    return this.http.post(`${this.baseURL}/parse-resume-ats`, formData, {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }

  saveResumeAts(file: File, queryParams: any) {
    const formData = new FormData();
    formData.append('resume_file', file);

    // Constructing query string manually
    const queryString =
    `total_experience_months=${queryParams.totalExpMonth}` +
    `&current_salary_lacs=${queryParams.currentSalaryLacs}` +
    `&email=${queryParams.email}` +
    `&candidate_name=${queryParams.fullName}` +
    `&phone_number=${queryParams.phoneNumber}` +
    `&expected_salary_thousands=${queryParams.expectedSalaryThousands}` +
    `&current_salary_thousands=${queryParams.currentSalaryThousands ?? ''}` +
    `&notice_period=${queryParams.noticePeriod}` +
    `&comments=${queryParams.comments ?? ''}` +
    `homeTown=${queryParams.homeTown}` +
    `skills=${queryParams.skills.join(',')}` +
    `&current_company=${queryParams.currentCompany}` +
    `current_location=${queryParams.currentLocation}` +
    `&qualification=${queryParams.qualification}`;


    return this.http.post(`${this.baseURL}/save-resume-ats?${queryString}`, formData, {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }

  parseAtsScore(ats_uuid: string) {
    return this.http.post(`${this.baseURL}/parse-ats-score?ats_uuid=${ats_uuid}`, new FormData(), {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }
}
