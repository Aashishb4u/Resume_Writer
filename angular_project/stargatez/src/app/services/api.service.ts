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
    if (formData.fullName) data.append('candidate_name', formData.fullName);
    if (formData.phoneNumber) data.append('phone_number', formData.phoneNumber);
    if (formData.email) data.append('email', formData.email);
    if (formData.skills) data.append('skills', formData.skills.join(','));
    if (formData.totalExpYear) data.append('total_experience_years', formData.totalExpYear);
    if (formData.totalExpMonth) data.append('total_experience_months', formData.totalExpMonth);
    if (formData.relevantExpYear) data.append('relevant_experience_years', formData.relevantExpYear);
    if (formData.relevantExpMonth) data.append('relevant_experience_months', formData.relevantExpMonth);
    if (formData.currentCompany) data.append('current_company', formData.currentCompany || '');
    if (formData.currentLocation) data.append('current_location', formData.currentLocation || '');
    if (formData.preferredLocation) data.append('preferred_location', formData.preferredLocation || '');
    if (formData.currentSalaryLacs) data.append('current_salary_lacs', formData.currentSalaryLacs || '');
    if (formData.currentSalaryThousands) data.append('current_salary_thousands', formData.currentSalaryThousands || '');
    if (formData.expectedSalaryLacs) data.append('expected_salary_lacs', formData.expectedSalaryLacs || '');
    if (formData.expectedSalaryThousands) data.append('expected_salary_thousands', formData.expectedSalaryThousands || '');
    if (formData.noticePeriod) data.append('notice_period', formData.noticePeriod || '');
    if (formData.countryCode) data.append('country_code', formData.countryCode || '');
    if (formData.designation) data.append('designation', formData.designation || '');
    if (formData.qualification) data.append('qualification', formData.qualification || '');
    if (formData.university) data.append('university', formData.university || '');
    if (formData.industry) data.append('industry', formData.industry || '');
    if (formData.homeTown) data.append('home_town', formData.homeTown || '');
    if (formData.comments) data.append('comments', formData.comments || '');
    if (formData.resumeContent) data.append('resume_content', formData.resumeContent || '');
    if (formData.submitted_from) data.append('submitted_from', formData.submitted_from || '');

    return this.http.post(`${this.baseURL}/save-resume`, data, {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }

  fetchAllCountries() {
    return this.http.get('https://restcountries.com/v3.1/all?fields=name,currencies,idd');
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
    // const formData = new FormData();
    // formData.append('resume_file', file);
    // formData.append('skills', queryParams.skills);
    // formData.append('submitted_from', queryParams.submitted_from || '');
    const data = new FormData();
    if (queryParams.resumeFile) data.append('resume_file', file);
    if (queryParams.partnerName) data.append('partner_name', queryParams.partnerName);
    if (queryParams.partnerEmail) data.append('partner_email', queryParams.partnerEmail);
    if (queryParams.partnerPhoneNumber) data.append('partner_phone_number', queryParams.partnerPhoneNumber);
    if (queryParams.partner_id) data.append('partner_id', queryParams.partner_id);
    if (queryParams.fullName) data.append('candidate_name', queryParams.fullName);
    if (queryParams.phoneNumber) data.append('phone_number', queryParams.phoneNumber);
    if (queryParams.email) data.append('email', queryParams.email);
    if (queryParams.skills) data.append('skills', queryParams.skills.join(','));
    if (queryParams.totalExpYears) data.append('total_experience_years', queryParams.totalExpYears);
    if (queryParams.totalExpMonth) data.append('total_experience_months', queryParams.totalExpMonth);
    if (queryParams.relevantExpYear) data.append('relevant_experience_years', queryParams.relevantExpYear);
    if (queryParams.relevantExpMonth) data.append('relevant_experience_months', queryParams.relevantExpMonth);
    if (queryParams.currentCompany) data.append('current_company', queryParams.currentCompany || '');
    if (queryParams.currentLocation) data.append('current_location', queryParams.currentLocation || '');
    if (queryParams.preferredLocation) data.append('preferred_location', queryParams.preferredLocation || '');
    if (queryParams.currentSalaryLacs) data.append('current_salary_lacs', queryParams.currentSalaryLacs || '');
    if (queryParams.currentSalaryThousands) data.append('current_salary_thousands', queryParams.currentSalaryThousands || '');
    if (queryParams.expectedSalaryLacs) data.append('expected_salary_lacs', queryParams.expectedSalaryLacs || '');
    if (queryParams.expectedSalaryThousands) data.append('expected_salary_thousands', queryParams.expectedSalaryThousands || '');
    if (queryParams.noticePeriod) data.append('notice_period', queryParams.noticePeriod || '');
    if (queryParams.countryCode) data.append('country_code', queryParams.countryCode || '');
    if (queryParams.designation) data.append('designation', queryParams.designation || '');
    if (queryParams.qualification) data.append('qualification', queryParams.qualification || '');
    if (queryParams.university) data.append('university', queryParams.university || '');
    if (queryParams.industry) data.append('industry', queryParams.industry || '');
    if (queryParams.homeTown) data.append('home_town', queryParams.homeTown || '');
    if (queryParams.comments) data.append('comments', queryParams.comments || '');
    if (queryParams.resumeContent) data.append('resume_content', queryParams.resumeContent || '');
    if (queryParams.submitted_from) data.append('submitted_from', queryParams.submitted_from || '');


    return this.http.post(`${this.baseURL}/save-resume-ats`, data, {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }

  parseAtsScore(ats_uuid: string) {
    return this.http.post(`${this.baseURL}/parse-ats-score?ats_uuid=${ats_uuid}`, new FormData(), {
      headers: new HttpHeaders({ 'enctype': 'multipart/form-data' })
    });
  }
}
