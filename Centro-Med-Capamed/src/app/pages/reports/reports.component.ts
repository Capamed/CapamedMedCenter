import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/models/AppConfig';
import { Report } from 'src/app/models/Report';
import { AppConfigService } from 'src/app/services/app-config.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public arrayReports: Report[] = [];
  public arrayCount: number[] = [];

  lineStylesData: any;

  basicOptions: any;

  subscription: Subscription | undefined;

  config!: AppConfig;

  public years: any[] = [];
  public selectYear: any;

  constructor(private readonly _reportService: ReportService, private messageService: MessageService, private configService: AppConfigService) {

  }

  ngOnInit(): void {
    this.years = [
      { code: '2021', name: '2021' },
      { code: '2022', name: '2022' }
    ];
    this.getReport(2022);
  }

  updateChartOptions() {
    if (this.config.dark)
      this.applyDarkTheme();
    else
      this.applyLightTheme();
  }

  applyLightTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }

  applyDarkTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };
  }
  getReport(year: number) {
    this.arrayCount = [];
    const respReportService = this._reportService.getReport(year).subscribe(
      (data: Report[]) => {
        this.arrayReports = data;
        this.arrayReports.forEach(
          (e) => {
            this.arrayCount.push(e.cantidad);
          }
        );
        this.lineStylesData = {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          datasets: [
            {
              label: 'Cantidad de citas agendadas',
              data: this.arrayCount,
              fill: true,
              borderColor: (year === 2021) ? '#e76fb6' : '#FFA726',
              tension: .4,
              backgroundColor: (year === 2021) ?'#f1828275':'rgba(255,167,38,0.2)'
            }
          ]
        };
      }
    );

    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe((config: any) => {
      this.config = config;
      this.updateChartOptions();
    });

  }
  chooseYear() {
    if (this.selectYear === undefined || this.selectYear === null || this.selectYear === 'undefined') {

    } else {
      this.getReport(parseInt(this.selectYear.code));
    }

  }
}
